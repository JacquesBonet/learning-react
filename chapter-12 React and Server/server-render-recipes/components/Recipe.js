class Expedition extends Vacation {

    constructor(destination, length, gear) {
        super(destination, length)

        this.gear = gear
    }

    print() {
        super.print()
        console.log(`Bring your ${this.gear.join(" and your ")}`)
    }
}

That’s simple