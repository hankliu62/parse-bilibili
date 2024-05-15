import { useCallback } from 'react';
import useTopWindow from './useTopWindow';

function useBreadcrumb() {
  const isTop = useTopWindow();

  const onClickBreadcrumb = useCallback(
    (event) => {
      if (isTop) {
        window.location.href = 'https://hankliu62.github.io/toolkits/';
      } else {
        window.top.postMessage(
          {
            type: 'homepage',
          },
          '*',
        );
      }

      event?.preventDefault();
    },
    [isTop],
  );

  return onClickBreadcrumb;
}

export default useBreadcrumb;
