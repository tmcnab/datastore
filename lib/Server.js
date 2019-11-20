import ServerOptions from './ServerOptions'

class Server {

	#options = null

	constructor (options) {
		if (options.constructor.name !== 'ServerOptions') {
			throw new Error('TODO')
		} else {
			this.#options = options
		}
	}

}

export default Object.freeze(Server)
