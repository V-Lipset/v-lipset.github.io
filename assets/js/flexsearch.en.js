import Index from 'flexsearch';

(function () {
  'use strict';

  const index = new Index.Document({
    tokenize: 'forward',
    cache: true,
    document: {
      id: 'id',
      index: [
        {
          field: 'title',
          tokenize: 'forward',
          boost: 100
        },
        {
          field: 'tags',
          tokenize: 'forward',
          boost: 20
        },
        {
          field: {{ if site.Params.doks.indexSummary }}'summary'{{ else }}'content'{{ end }},
          tokenize: 'forward',
          boost: 1
        },
        {
          field:  'date',
          tokenize: 'strict',
          encode: false
        }
      ],
      store: ['title','summary','date','permalink']
    }
  });

  const searchInput = document.querySelector('.search-text');
  const searchResults = document.querySelector('.search-results');
  const noResultsMsg = document.querySelector('.search-no-results');
  const noRecentMsg = document.querySelector('.search-no-recent');
  const queryNoResults = document.querySelector('.query-no-results');
  const templateContent = document.querySelector('template').content;

  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  function showResults(items) {
    const fragment = document.createDocumentFragment();
    searchResults.textContent = '';

    const itemsLength = items.length;
    const query = searchInput.value;

    if (itemsLength === 0 && query === '') {
      noResultsMsg.classList.add('d-none');
      noRecentMsg.classList.remove('d-none');
    } else if (itemsLength === 0 && query !== '') {
      noRecentMsg.classList.add('d-none');
      queryNoResults.innerText = query;
      noResultsMsg.classList.remove('d-none');
    } else {
      noRecentMsg.classList.add('d-none');
      noResultsMsg.classList.add('d-none');
    }

    items.forEach(item => {
      const result = templateContent.cloneNode(true);
      const a = result.querySelector('a');
      const time = result.querySelector('time');
      const content = result.querySelector('.content');

      a.innerHTML = item.title;
      a.href = item.permalink;
      time.innerText = item.date;
      content.innerHTML = item.summary;
      fragment.appendChild(result);
    });

    searchResults.appendChild(fragment);
  }

  function doSearch() {
    const query = searchInput.value.trim();
    const limit = {{ .searchLimit }};

    const results = index.search({
      query: query,
      enrich: true,
      limit: limit,
    });

    const uniqueItems = new Map();

    results.forEach(function (result) {
      result.result.forEach(function (r) {
        if (!uniqueItems.has(r.id)) {
          uniqueItems.set(r.id, r.doc);
        }
      });
    });

    let itemsArray = Array.from(uniqueItems.values());

    itemsArray.sort((a, b) => {
      const q = query.toLowerCase();

      const isBlogA = a.permalink.includes('/blog/');
      const isBlogB = b.permalink.includes('/blog/');

      if (isBlogA !== isBlogB) {
        return isBlogA ? 1 : -1;
      }

      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      const aHasTitle = titleA.includes(q);
      const bHasTitle = titleB.includes(q);

      if (aHasTitle !== bHasTitle) {
        return aHasTitle ? -1 : 1;
      }

      return 0;
    });

    showResults(itemsArray);
  }

  function enableUI() {
    const searchform = document.querySelector('.search-form');

    searchform.addEventListener('submit', function (e) {
      e.preventDefault();
      doSearch();
    });

    searchform.addEventListener('input', debounce(function () {
      doSearch();
    }, 300));

    document.querySelector('.search-loading').classList.add('d-none');
    document.querySelector('.search-input').classList.remove('d-none');
    searchInput.focus();
  }

  function buildIndex() {
    document.querySelector('.search-loading').classList.remove('d-none');
    fetch("{{ site.LanguagePrefix }}/search-index.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data.forEach(function (item) {
          index.add(item);
        });
      });
  }

  buildIndex();
  enableUI();
})();
