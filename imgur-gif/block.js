function Block(a){
    this.x = 100;
    this.y = 100;
    this.xSpeed = scale * 1;
    this.ySpeed = scale * 0;
    // this.lt;
    // this.rt;
    // this.up; 
    // this.dw;
    //var a = arguments[0];
    // this.bx = 10;
    // this.by = 70;

    this.draw = function(){
        ctx.fillStyle= "#FF00FF";
        ctx.fillRect(this.x, this.y, scale, scale);
        //ctx.fillStyle= "#FF0000";
        // lt = ctx.fillRect(this.bx-this.bx, this.by/2, this.bx, this.by);
        // rt = ctx.fillRect(canvas.width-this.bx, this.by/2, this.bx, this.by);      
        // up = ctx.fillRect(this.by, this.by-this.by, this.by*2, this.bx/2);
        // dw = ctx.fillRect(this.by, canvas.height-(this.bx/2), this.by*2, this.bx/2);
    }

    this.update = function(){
        console.log(arguments[0]);
        if(arguments[0] == 1){
            console.log(arguments[0]);
            ctx.clearRect(0,0, canvas.width, canvas.height);
            this.x += this.xSpeed;
            this.y += this.ySpeed;
            if(this.y < 20){
                this. ySpeed =0;
            }
            if(this.y > canvas.height-30){
                this. ySpeed =0;
            }
            if(this.x > canvas.width-30){
                this. xSpeed =0;
            }
            if(this.x < 20){
                this. xSpeed =0;
            }
        }
        else{
            console.log(arguments[0]);
            return;
        }
    }

    this.changeDirection = function(direction){
        switch(direction){
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale*1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale*1;
                break;
            case 'Left':
                this.xSpeed = -scale*1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale*1;
                this.ySpeed = 0;
                break;
        }
    }

}