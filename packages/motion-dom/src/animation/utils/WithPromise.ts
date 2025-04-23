export class WithPromise {
    protected _finished: Promise<void>

    resolve: VoidFunction
    count = 0

    constructor() {
        this.updateFinished()
    }

    get finished() {
        return this._finished
    }

    protected updateFinished() {
        this.count++
        this._finished = new Promise<void>((resolve) => {
            this.resolve = resolve
        })
    }

    protected notifyFinished() {
        console.trace()
        this.resolve()
    }

    /**
     * Allows the animation to be awaited.
     *
     * @deprecated Use `finished` instead.
     */
    then(onResolve: VoidFunction, onReject?: VoidFunction) {
        return this.finished.then(onResolve, onReject)
    }
}
