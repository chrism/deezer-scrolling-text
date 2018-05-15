import Component from '@ember/component';

export default Component.extend({
  classNames: ['item-display'],
  classNameBindings: ['focused'],
  focused: true,
});
