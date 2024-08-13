const url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops';

fetch(url)
    .then(response => response.text())
    .then(html => {

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        const details = [];
        const elements = tempDiv.querySelectorAll('.col-lg-9 .row .col-md-4');

        elements.forEach(element => {
            const title = element.querySelector('.title')?.textContent.trim();
            const price = element.querySelector('.price')?.textContent.trim();
            const para = element.querySelector('.description')?.textContent.trim();
            const image = element.querySelector('.card-body .image')?.getAttribute('src');
            const ramRegex = /\b(\d+GB)\b/;

            let ram;
            const match = para?.match(ramRegex);
            if (match) {
                ram = match[1];
            }

            details.push({
                'title': title,
                'price': price,
                'ram': ram,
                'image': "https://webscraper.io" + image
            });
            
        });



let inputfield=document.querySelector('.inputfield');

let btnall=document.querySelector('.all');
let btncontainer=document.querySelector('.btncontainer');


const cardcontainer=document.querySelector('.cardcontainer');

function createCard(details){
    details.forEach(field=>{
        let card=document.createElement('div');
        card.classList.add('relative', 'border-2', 'h-80', 'md:w-[28vw]', 'lg:w-[22vw]',  'mb-3', 'rounded-md', 'p-4','card');
        
        let imgtag=document.createElement('img');
        imgtag.src=field.image;
        imgtag.classList.add('object-cover', 'border-2')
        
        let p1=document.createElement('p');
        p1.classList.add('mt-2','mb-2', 'font-bold');
        p1.textContent=field.title;

        let p2=document.createElement('p');
        p2.classList.add('font-bold', 'text-sm', 'text-red-600');
        p2.textContent=`${field.price}`;

        let p3=document.createElement('p');
        p3.classList.add('p-1', 'bg-gray-200', 'w-fit', 'rounded-lg', 'text-xs', 'absolute', 'bottom-1');
        p3.textContent=field.ram;

        card.appendChild(imgtag)
        card.appendChild(p1)
        card.appendChild(p2)
        card.appendChild(p3)


        cardcontainer.appendChild(card);
    })
}


const set=new Set();
const filterItem = details.filter(item => {
        set.add(item.ram);
});
set.forEach(value => {
        let newbtn=document.createElement('button');
        newbtn.innerText=value;
        newbtn.id=value.toLowerCase();
        newbtn.classList.add('bg-green-800', 'text-white', 'p-2', 'rounded-md');
        btncontainer.appendChild(newbtn);      
});



let btn4gb=document.getElementById('4gb');
let btn8gb=document.getElementById('8gb');
let btn6gb=document.getElementById('6gb');
let btn12gb=document.getElementById('12gb');
let btn16gb=document.getElementById('16gb');




inputfield.addEventListener('input',()=>{
    cardcontainer.innerHTML = '';
    const q=inputfield.value.toLowerCase();
    if(q){
        const filterItem=details.filter(field=>field.title.toLowerCase().startsWith(q.toLowerCase()));
        if(filterItem!=0){
            createCard(filterItem);
        }else{
            let p1=document.createElement('p');
            p1.classList.add('mt-2','mb-2', 'font-bold');
            p1.textContent='Sorry no item match your search😕';
            cardcontainer.appendChild(p1);
        }
        
    }
});


btnall.addEventListener('click',(e)=>{
    cardcontainer.innerHTML='';
    createCard(details);

})

btn4gb?.addEventListener('click', (e) => {
    cardcontainer.innerHTML = '';
    const filterItem = details.filter(item => item.ram === '4GB');
    createCard(filterItem);
    console.log('4gbbbbsdfbsdf')
});

btn8gb?.addEventListener('click', (e) => {
    cardcontainer.innerHTML = '';
    const filterItem = details.filter(item => item.ram === '8GB');
    createCard(filterItem);
    console.log('4gbbbbsdfbsdf')
});

btn6gb?.addEventListener('click', (e) => {
    cardcontainer.innerHTML = '';
    const filterItem = details.filter(item => item.ram === '6GB');
    createCard(filterItem);
    console.log('4gbbbbsdfbsdf')
});

btn12gb?.addEventListener('click', (e) => {
    cardcontainer.innerHTML = '';
    const filterItem = details.filter(item => item.ram === '12GB');
    createCard(filterItem);
    console.log('4gbbbbsdfbsdf')
});
btn16gb?.addEventListener('click', (e) => {
    cardcontainer.innerHTML = '';
    const filterItem = details.filter(item => item.ram === '16GB');
    createCard(filterItem);
    console.log('4gbbbbsdfbsdf')
});

       
       
    })
    .catch(e => {
        console.error('Error:', e);
    });
