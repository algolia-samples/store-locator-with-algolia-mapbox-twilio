// Autocomplete.tsx

import React, { createElement, Fragment, useEffect, useRef } from 'react';
import { autocomplete, AutocompleteOptions } from '@algolia/autocomplete-js';
import { render } from 'react-dom';

type Optional<TObject, TKeys extends keyof TObject> = Partial<
  Pick<TObject, TKeys>
> &
  Omit<TObject, TKeys>;

function Autocomplete<TObject extends Record<string, unknown> = any>(
  props: Optional<
    AutocompleteOptions<TObject>,
    'container' | 'renderer' | 'render'
  >
) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current!,
      renderer: { createElement, Fragment },
      render({ children }, root) {
        //@ts-ignore
        render(children, root);
      },
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, []);

  return <div className={'w-full'} ref={containerRef} />;
}

export default Autocomplete;
