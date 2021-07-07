export function debouncePromise<
  TFunction extends (...args: any[]) => Promise<unknown>
>(fn: TFunction, time: number): TFunction {
  let timerId: number;

  return function (...args: Parameters<TFunction>) {
    if (timerId) {
      clearTimeout(timerId);
    }

    return new Promise((resolve) => {
      timerId = window.setTimeout(() => resolve(fn(...args)), time);
    });
  } as TFunction;
}
