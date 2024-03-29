/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Trigger } from './trigger.class';
/** @type {?} */
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
export function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    /** @type {?} */
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map((/**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) { return trigger.split(':'); }))
        .map((/**
     * @param {?} triggerPair
     * @return {?}
     */
    function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    }));
    /** @type {?} */
    var manualTriggers = parsedTriggers
        .filter((/**
     * @param {?} triggerPair
     * @return {?}
     */
    function (triggerPair) { return triggerPair.isManual(); }));
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
export function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(triggers);
    /** @type {?} */
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    //  parsedTriggers.forEach((trigger: Trigger) => {
    parsedTriggers.forEach((/**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, (/**
             * @return {?}
             */
            function () {
                toggleFn();
            })));
            // listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, (/**
         * @return {?}
         */
        function () {
            showFn();
        })), 
        // renderer.listen(target, trigger.open, showFn),
        renderer.listen(target, trigger.close, (/**
         * @return {?}
         */
        function () {
            hideFn();
        })));
        // renderer.listen(target, trigger.close, hideFn));
    }));
    return (/**
     * @return {?}
     */
    function () { listeners.forEach((/**
     * @param {?} unsubscribeFn
     * @return {?}
     */
    function (unsubscribeFn) { return unsubscribeFn(); })); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy90cmlnZ2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUVwQyxlQUFlLEdBQUc7SUFDdEIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztJQUNoQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0NBQy9COzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLFFBQWdCLEVBQUUsT0FBOEI7SUFBOUIsd0JBQUEsRUFBQSx5QkFBOEI7O1FBQ3RFLGVBQWUsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7SUFFL0MsSUFBSSxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNoQyxPQUFPLEVBQUUsQ0FBQztLQUNYOztRQUVLLGNBQWMsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUNoRCxHQUFHOzs7O0lBQUMsVUFBQyxPQUFlLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixFQUFDO1NBQzVDLEdBQUc7Ozs7SUFBQyxVQUFDLFdBQXFCOztZQUNuQixLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVc7UUFDcEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQyxFQUFDOztRQUVFLGNBQWMsR0FBRyxjQUFjO1NBQ2xDLE1BQU07Ozs7SUFBQyxVQUFDLFdBQW9CLElBQUssT0FBQSxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQXRCLENBQXNCLEVBQUM7SUFFM0QsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7S0FDN0U7SUFFRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzVELE1BQU0sSUFBSSxLQUFLLENBQUMsMEVBQTBFLENBQUMsQ0FBQztLQUM3RjtJQUVELE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUM7Ozs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsUUFBbUIsRUFBRSxNQUFXLEVBQUUsUUFBZ0IsRUFDakYsTUFBZ0IsRUFBRSxNQUFnQixFQUFFLFFBQWtCOztRQUNoRCxjQUFjLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7UUFDeEMsU0FBUyxHQUFVLEVBQUU7SUFFM0IsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDL0QsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDO0tBQzNCO0lBRUQsa0RBQWtEO0lBQ2xELGNBQWMsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQyxPQUFzQjtRQUM1QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJOzs7WUFBRTtnQkFDbkQsUUFBUSxFQUFFLENBQUM7WUFDYixDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ0osbUVBQW1FO1lBQ25FLE9BQU87U0FDUjtRQUVELFNBQVMsQ0FBQyxJQUFJLENBQ1osUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUk7OztRQUFFO1lBQ3BDLE1BQU0sRUFBRSxDQUFDO1FBQ1YsQ0FBQyxFQUFDO1FBQ0gsaURBQWlEO1FBQ2pELFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLOzs7UUFBRTtZQUNyQyxNQUFNLEVBQUUsQ0FBQztRQUNYLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDSixtREFBbUQ7SUFDdkQsQ0FBQyxFQUFDLENBQUM7SUFFSDs7O0lBQU8sY0FBUSxTQUFTLENBQUMsT0FBTzs7OztJQUFDLFVBQUMsYUFBdUIsSUFBSyxPQUFBLGFBQWEsRUFBRSxFQUFmLENBQWUsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQ3BGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxuICovXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyaWdnZXIgfSBmcm9tICcuL3RyaWdnZXIuY2xhc3MnO1xuXG5jb25zdCBERUZBVUxUX0FMSUFTRVMgPSB7XG4gIGhvdmVyOiBbJ21vdXNlb3ZlcicsICdtb3VzZW91dCddLFxuICBmb2N1czogWydmb2N1c2luJywgJ2ZvY3Vzb3V0J11cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyaWdnZXJzKHRyaWdnZXJzOiBzdHJpbmcsIGFsaWFzZXM6IGFueSA9IERFRkFVTFRfQUxJQVNFUyk6IFRyaWdnZXJbXSB7XG4gIGNvbnN0IHRyaW1tZWRUcmlnZ2VycyA9ICh0cmlnZ2VycyB8fCAnJykudHJpbSgpO1xuXG4gIGlmICh0cmltbWVkVHJpZ2dlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSB0cmltbWVkVHJpZ2dlcnMuc3BsaXQoL1xccysvKVxuICAgIC5tYXAoKHRyaWdnZXI6IHN0cmluZykgPT4gdHJpZ2dlci5zcGxpdCgnOicpKVxuICAgIC5tYXAoKHRyaWdnZXJQYWlyOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgY29uc3QgYWxpYXMgPSBhbGlhc2VzW3RyaWdnZXJQYWlyWzBdXSB8fCB0cmlnZ2VyUGFpcjtcbiAgICAgIHJldHVybiBuZXcgVHJpZ2dlcihhbGlhc1swXSwgYWxpYXNbMV0pO1xuICAgIH0pO1xuXG4gIGNvbnN0IG1hbnVhbFRyaWdnZXJzID0gcGFyc2VkVHJpZ2dlcnNcbiAgICAuZmlsdGVyKCh0cmlnZ2VyUGFpcjogVHJpZ2dlcikgPT4gdHJpZ2dlclBhaXIuaXNNYW51YWwoKSk7XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBvbmx5IG9uZSBtYW51YWwgdHJpZ2dlciBpcyBhbGxvd2VkJyk7XG4gIH1cblxuICBpZiAobWFudWFsVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBtYW51YWwgdHJpZ2dlciBjYW5cXCd0IGJlIG1peGVkIHdpdGggb3RoZXIgdHJpZ2dlcnMnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUcmlnZ2Vycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvVHJpZ2dlcnMocmVuZGVyZXI6IFJlbmRlcmVyMiwgdGFyZ2V0OiBhbnksIHRyaWdnZXJzOiBzdHJpbmcsXG4gIHNob3dGbjogRnVuY3Rpb24sIGhpZGVGbjogRnVuY3Rpb24sIHRvZ2dsZUZuOiBGdW5jdGlvbik6IEZ1bmN0aW9uIHtcbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKHRyaWdnZXJzKTtcbiAgY29uc3QgbGlzdGVuZXJzOiBhbnlbXSA9IFtdO1xuXG4gIGlmIChwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPT09IDEgJiYgcGFyc2VkVHJpZ2dlcnNbMF0uaXNNYW51YWwoKSkge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICAvLyAgcGFyc2VkVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xuICBwYXJzZWRUcmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBUcmlnZ2VyIHwgYW55KSA9PiB7XG4gICAgaWYgKHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZSkge1xuICAgICAgbGlzdGVuZXJzLnB1c2gocmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZUZuKCk7XG4gICAgICB9KSk7XG4gICAgICAvLyBsaXN0ZW5lcnMucHVzaChyZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sIHRvZ2dsZUZuKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2goXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sICgpID0+IHtcbiAgICAgICAgc2hvd0ZuKCk7XG4gICAgICAgfSksXG4gICAgICAvLyByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sIHNob3dGbiksXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLmNsb3NlLCAoKSA9PiB7XG4gICAgICAgIGhpZGVGbigpO1xuICAgICAgfSkpO1xuICAgICAgLy8gcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5jbG9zZSwgaGlkZUZuKSk7XG4gIH0pO1xuXG4gIHJldHVybiAoKSA9PiB7IGxpc3RlbmVycy5mb3JFYWNoKCh1bnN1YnNjcmliZUZuOiBGdW5jdGlvbikgPT4gdW5zdWJzY3JpYmVGbigpKTsgfTtcbn1cbiJdfQ==