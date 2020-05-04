
    setTimeout(() => {
        
    }, 2000);

    const wall = document.querySelector('#wall');
    const article = document.querySelector('#article');
    var w = window.innerWidth;
    var h = window.innerHeight;

    const brickWidth = 10;
    const brickHeight = brickWidth/2;

    let isMexican = confirm("Are you mexican?");

    const buildBrick = () => {
        const brickImage = document.createElement('img');
        brickImage.src = './../assets/images/brick.jpg'; 
        brickImage.classList.add('brick');
        brickImage.style.width = brickWidth + 'vw'; 

        wall.append(brickImage);
    };



    if(isMexican){
        let n = 0;
        let interval = 4*brickWidth;
        let wallInterval = setInterval(() => {
            buildBrick();
            n++;
            if(h + w*brickHeight/100 < w*(brickHeight * ((n - n%(100/brickWidth))/(100/brickWidth) + 1))/100){
                clearInterval(wallInterval);
            }
        }, interval);   
    }





