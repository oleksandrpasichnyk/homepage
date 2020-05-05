window.onload = () => {
    setTimeout(() => {
        let isMexican = confirm("Are you mexican?"); 
        
        const w = window.innerWidth;
        const h = window.innerHeight;

        let bricksInRowNumber;
        w <= 767 ? bricksInRowNumber = 5 : bricksInRowNumber = 10;
        const brickWidth = 100/bricksInRowNumber;
        const brickHeight = brickWidth/2;
        const brickPixelkWidth = w/bricksInRowNumber;
        const brickPixelHeight = brickPixelkWidth/2;
        
        const wall = document.querySelector('#wall');
        wall.style.width = Number(100 + brickWidth) + 'vw';
        wall.style.left = -brickWidth/2 + 'vw' ;
     
        const brickStylized = (brickImage, brickClass) => {
            brickImage.src = './assets/images/brick.jpg';
            brickImage.classList.add(brickClass);
            brickImage.style.width = brickWidth + 'vw';
            brickImage.style.height = brickHeight + 'vw'; 
            brickImage.style.filter = 'sepia(' + (Math.random()*0.5 + 0.1) + ')';
        }

        const buildBrick = () => {
            const brickImage = document.createElement('img');
            brickStylized(brickImage, 'brick');
            wall.append(brickImage);
        };

        const buildLandslideBrick = () => {
            const brickImage = document.createElement('img');
            brickStylized(brickImage, 'landslideBrick');
            brickImage.style.marginLeft = brickWidth/2 + 'vw';
            wall.append(brickImage);
        };
        
        if(isMexican){
            let n = 0;
            let currentRow = 1;
            let interval = 3*brickWidth;
            let wallInterval = setInterval(() => {
                (n)%(2*bricksInRowNumber + 1) === 0 ? buildLandslideBrick() : buildBrick();  
                n++;
                if(n%(bricksInRowNumber + 0.5) === 0){currentRow++};
                if(h/brickPixelHeight + 3 < currentRow){clearInterval(wallInterval)};  
            },  interval);   
        }
    }, 2000);
}
    





