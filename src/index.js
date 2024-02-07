const data = [
    {
        img_url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/amazon_vouchor_94d330a4b2.png",
        title:"Amazon Voucher",
        coins:100,

    },
    {
        img_url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_ef30609f7d.png",
        title:"Mechanical Keyboard",
        coins:4000,
    },
    {
        img_url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_1_315739c64c.png",
        title:"Amazon Firestick",
        coins:3000,
    },
    {
        img_url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_2_20f5e1fa71.png",
        title:"Amazon Echo",
        coins:3000
    },
    {
        img_url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_4_99b7c43667.png",
        title:"Smart Watch",
        coins:1500
    },
    {
        img_url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Reliance_b4dd98b11c.jpg",
        title:"Reliance Digital Voucher",
        coins:100
    }
]

let container = document.getElementById("container");
appendDataToContainer();

function appendDataToContainer(){
    container.innerHTML = null;
    data.map((item)=>{
    
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = item.img_url;
        
        let div = document.createElement('div');
        div.setAttribute("class", "flex")

        let title = document.createElement('p');
        title.innerText = item.title;
    
        let coins = document.createElement('p');
        coins.innerText = item.coins;
    
        let button = document.createElement('button');
        button.innerText = `Claim for ${item.coins} Coins`;
    
        div.append(title, coins);
        box.append(img, div, button);
        container.append(box); 
    })
}
