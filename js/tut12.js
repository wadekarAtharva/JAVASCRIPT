console.log('This is all about constructor');

// creating a constructor

function generalCar(name,topspeed,engine){
    this.gname=name;
    this.gtopspeed=topspeed;
    this.gengine=engine;
    this.print = function(){
        console.log(`${this.gname} is running at ${this.gtopspeed} with engine named ${this.gengine}`)
    }
}
car1=new generalCar('Nissan',180,'Hydrolic');
console.log(car1);