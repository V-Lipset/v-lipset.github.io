import Index from 'flexsearch';

(function () {
  'use strict';

  const index = new Index.Document({
    tokenize: 'full',
    document: {
      id: 'id',
      index: [
        {
          field: 'title',
          tokenize: 'full',
          boost: 100
        },
        {
          field: 'tags',
          tokenize: 'full',
          boost: 20
        },
        {
          field: {{ if site.Params.doks.indexSummary }}'summary'{{ else }}'content'{{ end }},
          tokenize: 'full',
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

  function showResults(items) {
    const template = document.querySelector('template').content;
    const fragment = document.createDocumentFragment();
    const results = document.querySelector('.search-results');
    results.textContent = '';

    const itemsLength = items.length;

    if ((itemsLength === 0) && (document.querySelector('.search-text').value === '')) {
      document.querySelector('.search-no-results').classList.add('d-none');
      document.querySelector('.search-no-recent').classList.remove('d-none');
    } else if ((itemsLength === 0) && (document.querySelector('.search-text').value !== '')) {
      document.querySelector('.search-no-recent').classList.add('d-none');
      const queryNoResults = document.querySelector('.query-no-results');
      queryNoResults.innerText = document.querySelector('.search-text').value;
      document.querySelector('.search-no-results').classList.remove('d-none');
    } else {
      document.querySelector('.search-no-recent').classList.add('d-none');
      document.querySelector('.search-no-results').classList.add('d-none');
    }

    items.forEach(item => {
      const result = template.cloneNode(true);
      const a = result.querySelector('a');
      const time = result.querySelector('time');
      const content = result.querySelector('.content');
      a.innerHTML = item.title;
      a.href = item.permalink;
      time.innerText = item.date;
      content.innerHTML = item.summary;
      fragment.appendChild(result);
    });

    results.appendChild(fragment);
  }

  function doSearch() {
    const query = document.querySelector('.search-text').value.trim();
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

      if (isBlogA && !isBlogB) {
        return 1;
      }
      if (!isBlogA && isBlogB) {
        return -1;
      }

      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      const aHasTitle = titleA.includes(q);
      const bHasTitle = titleB.includes(q);

      if (aHasTitle && !bHasTitle) {
        return -1;
      }
      if (!aHasTitle && bHasTitle) {
        return 1;
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
    searchform.addEventListener('input', function () {
      doSearch();
    });
    document.querySelector('.search-loading').classList.add('d-none');
    document.querySelector('.search-input').classList.remove('d-none');
    document.querySelector('.search-text').focus();
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
