import { isEqual } from "lodash";
import * as ReactDOM from "react-dom";

import { HEREMapProps } from "../HEREMap";
import mixin from "../utils/mixin";

export const HMapMethods = mixin({
  // return the HTMLElement representing this HEREMap component
  getElement(): Element {
    return ReactDOM.findDOMNode(this);
  },

  getMap(): H.Map {
    return this.state.map;
  },

  setCenter(point: H.geo.IPoint): void {
    const {animateCenter} = this.props;
    const {map} = this.state;
    map.setCenter(point, animateCenter === true);
  },

  setZoom(zoom: number): void {
    const {animateZoom} = this.props;
    const {map} = this.state;
    map.setZoom(zoom, animateZoom === true);
  },

});

export default HMapMethods;
