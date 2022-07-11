class Stars {
    constructor() {
        this.x = random(w/2,w/2)
        this.y = random(h/2,w/h)
        this.z = random(w)
        this.pz = this.z //privous z

        this.update = () => {
            this.z = this.z - speed;
            if(this.z < 1){
                this.z = w
                this.x = random(-w,w)
                this.y = random(-h,h)
                this.pz = this.z
            }
        }

        this.show = () => {
            var sx = map(this.x/this.z,0,1,0,w)
            var sy = map(this.y/this.z,0,1,0,h)
            var px = map(this.x/this.px,0,1,0,w)
            var py = map(this.y/this.z,0,1,0,h)
            this.pz = this.z
            stroke('white')
            line(px,py,sx,sy)
        }
    }
}