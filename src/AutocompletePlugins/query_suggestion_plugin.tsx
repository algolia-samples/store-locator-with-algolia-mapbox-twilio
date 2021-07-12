import React from 'react';
import { SearchClient } from 'algoliasearch/lite';
//@ts-ignore
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';

const createSuggestionsPlugin = (
  searchClient: SearchClient,
  indexName: string,
  onSelectHandler: (query: string) => void,
  onClick: (item: any) => void,
  HitComponent: React.ComponentType<any>
) => {
  return createQuerySuggestionsPlugin({
    searchClient,
    indexName,
    transformSource({ source }) {
      return {
        ...source,
        sourceId: 'AlgoliaIndex',
        onSelect(params) {
          onSelectHandler(params.item.query);
        },
        templates: {
          item({ item, components }: { item: any; components: any }) {
            return <HitComponent item={item} onClick={onClick} components={components} />;
          },
        },
      };
    },
  });
};

export { createSuggestionsPlugin };
