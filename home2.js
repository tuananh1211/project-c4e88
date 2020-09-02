
let Products = [
    {
      name: 'Nike CruzrOne (Bright Crimson)',
      prince: 2000000,
      description: 'Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably.',
      img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/53f98c8d-f58a-47ec-bef7-389deb481c5b/cruzrone-shoe-l6XXkk.jpg',
    },
    {
     name:'Nike Air Zoom Pegasus 37',
     prince: 1900000,
     description:'Reinvigorate your stride with the Nike Air Zoom Pegasus 37. Delivering the same fit and feel that runners love, the shoe has an all-new forefoot cushioning unit and foam for maximum responsiveness.',
     img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33201b0e-8971-45eb-b91b-edac41535f5a/air-zoom-pegasus-37-running-shoe-mwrTCc.jpg',
    },
    {
     name:'Nike Mercurial Superfly 7 Elite FG',
     prince: 4000000,
     description: 'Building on the 360 innovation of the 6, the Nike Mercurial Superfly 7 Elite FG Boot adds a Nike Aerowtrac zone to the forefoot and a slightly stiffer chassis to help supercharge traction.',
     img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/97bfb1b6-121a-4261-b13c-96c728b37959/mercurial-superfly-7-elite-fg-football-boot-7tfMF4.jpg',
    },
    {
     name: 'ordan Zoom 92',
     prince: 2000000,
     description: 'A nod to 90s basketball shoes, the Jordan Zoom 92 focuses on comfort, while tapping into the irreverent spirit of that eras designs.',
     img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c4c32264-920a-4cf0-9b6c-0ed2870f8dc4/jordan-zoom-92-shoe-0kfcnp.jpg',
    },
    {
     name: 'Jordan Air Max 200 XX',
     prince: 2000000,
     description: 'With design inspiration taken from the iconic AJ8, the Jordan Air Max 200 XX features enhanced cushioning for all-day, street-ready comfort.',
     img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2f378890-76df-427e-9b81-0d9184ef5334/jordan-air-max-200-xx-shoe-v2glvX.jpg',
    },
    {
     name: 'Nike React Infinity Run Flyknit',
     prince: 2400000,
     description: 'The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel.',
     img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4cf570d9-7e61-4f20-bde3-28bd8ee8197e/react-infinity-run-flyknit-running-shoe-xC1vr3.jpg',
    },
    {
     name: 'Nike Air Force 1 07',
     prince: 1500000,
     description: 'The radiance lives on in the Nike Air Force 1 07 the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to let you shine.',
     img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/79015f0e-17a3-4a8c-892c-5cf5c1603f39/air-force-1-07-shoe-AKTdww3y.jpg',
    },
    {
     name: 'Nike Zoom Double-Stacked',
     prince: 3200000,
     description: 'Fight the power with the stacked Air cushioning, big lift and hand-crafted look of the Nike Zoom Double-Stacked.',
     img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1e59a9c5-2434-4842-bff4-11e2f4117833/zoom-double-stacked-shoe-xmBWb2.jpg',
    },
    {
     name: 'Nike Air Zoom Pegasus 37'
     prince: 1200000,
     description: 'The iconic Nike Air Zoom Pegasus 37 returns with the all the comfort you need to go the distance.',
     img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9d60a8d7-5d13-4132-9322-97a7f0485eab/air-zoom-pegasus-37-older-running-shoe-jJVPMz.jpg',
     },
     {
      name: 'Nike React Vision'
      prince: 1500000,
      description: 'The Nike React Vision stands out whether youre at school or on the streets.',
      img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/59e39b8d-a4f0-41bc-9aa7-783205ae4c9d/react-vision-older-shoe-wb38kN.jpg',
     },
     {
      name: 'Nike Air Force 1 LV8'
      prince: 1000000,
      description: 'Time to "cherry-ish" a true legend with the Nike Air Force 1 LV8. The 82 original still has classic Air-Sole cushioning',
      img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-ba44190a-616c-40c0-8dcf-4d6e98389835/air-force-1-lv8-older-shoe-1Lp48b.jpg',
     },
     {
      name: 'Nike Star Runner 2 Light'
      prince: 800000,
      description: 'The Nike Star Runner 2 Light will have you looking fast and feeling faster with lasers popping off the Swoosh.',
      img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/17bb0b96-7670-4f8c-9757-969202bfbc88/star-runner-2-light-older-running-shoe-4BG9Jj.jpg',
     },
     
    ] ;

    function displayProducts(listproducts){
      let domProduct = document.getElementById('products');
      domProduct.innerHTML = '';
      for (let i = 0; i < listproducts.length; i++) {
          const product = listproducts[i];
          let html = 
          ` <div class="col-md-4" id="cot1">
          <div>
        <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')" class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')" class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')" class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')" class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4" id="cot2">
       <div>
        <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')"  class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')" class="card-title">${product.name}</h5>
              <p class="card-text">${product.description} </p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')" class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')" class="card-title">${product.name}</h5>
              <p class="card-text">${product.description} </p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4" id="cot3">
        <div>
            <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')" class="card-title">${product.name}</h5>
              <p class="card-text">${product.description} </p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')" class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')" class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="${product.img}" onclick="viewtaitle('${product.name}')" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 onclick="viewtaitle('${product.name}')" class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">${product.prince}</a>
            </div>
          </div>
        </div>`,
        domProduct.innerHTML += html;
      }

    };

    
    function viewtaitle(name){
      localStorage.setItem('selected', name);
      localStorage.setItem('products', JSON.stringify(products));
      window.location.anhgiay = 'detail.html';
  };

  let selectedName = localStorage.getItem('selected');
  let products = JSON.parse(localStorage.getItem('products'));
  
  let product = products.find(function (p) {
      return p.name === selectedName;
  });
  
  document.getElementById('product-name').innerHTML = product.name;
  document.getElementById('product-price').innerHTML = product.price + " đ";
  document.getElementById('product-img').src = product.img;
  document.getElementById('product-des').innerHTML = product.description;