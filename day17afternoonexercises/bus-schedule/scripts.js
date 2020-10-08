class Bus {
    constructor(direction, seats, passengers) {
        this.direction = direction;
        this.stations = ['Praha', 'Jihlava', 'Brno', 'Breclav', 'Viden'];
        this.seats = seats;
        this.passengers = passengers;
        this.last_station = 0
    }
    current() {
        return this.stations[this.last_station]
    }
    next() {
        this.last_station += this.direction;
        if (this.last_station < 0) {
            this.last_station = 0
        }
        if (this.last_station === this.stations.length) {
            this.last_station = this.last_station.length -1
        }
    }
    board(count) {
        this.seats += count
        if (this.passengers > this.seats) {
            this.seats = this.seats
        }
    }
    deboard(count) {
        this.passengers -= count
        if (this.passengers < 0) {
            this.passengers = 0
        }
    }
}

// const body = document.querySelector('.body');
// const createBusSchedule = () => {

// }

