/**
 * observerService
 * Service detected visibility and size of an dom element
 */

const observerService = () => {
  /**
   * listenerElement - observe dom element and call actions
   * @param {Object} observedElementRef
   * @param {function} action
   * @param {number} visibleRatio
   * @return {IntersectionObserver}
   */
  const intersectionObserver = (
    observedElementRef, action, visibleRatio = 0,
  ) => {
    const observerOptions = {
      threshold: [visibleRatio],
    };

    const onChange = changes => {
      changes.forEach(change => {
        if (change.intersectionRatio > visibleRatio) {
          action();
        }
      });
    };

    const observer = new IntersectionObserver(onChange, observerOptions);
    observer.observe(observedElementRef);

    return observer;
  };

  return {
    intersectionObserver,
  };
};

export default observerService();
