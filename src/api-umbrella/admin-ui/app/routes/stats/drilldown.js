import Base from './base';
import StatsDrilldown from 'api-umbrella-admin-ui/models/stats/drilldown';

export default Base.extend({
  model(params) {
    if(this.validateParams(params)) {
      return StatsDrilldown.find(params);
    } else {
      return {};
    }
  },
});
