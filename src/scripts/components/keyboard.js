import * as key from '../constants/KeyCode'
import { isRunning } from '../selectors'
import store from '../store'
import { moveActiveBlock, rotateActiveBlock } from '../actions/ActiveBlock'

export default class Keyboard {
	static addEvents () {
		window.addEventListener('keydown', this.onPressKeydown)
	}

	static onPressKeydown ({ keyCode }) {
		if (isRunning()) {
			switch (keyCode) {
			case key.LEFT_ARROW:
				return store.dispatch(moveActiveBlock('LEFT'))
			case key.RIGHT_ARROW:
				return store.dispatch(moveActiveBlock('RIGHT'))
			case key.SPACE_BAR:
			case key.UP_ARROW:
				return store.dispatch(rotateActiveBlock())
			default:
				return
			}
		}
	}
}
