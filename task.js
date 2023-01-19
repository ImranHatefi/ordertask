alert("Sifariş edə biləcəyiniz restoranlar: Mcdonalds,KFC,BurgerKing")
alert("Sifariş edə biləcəyiniz yeməklər və qiymətləri: fri = 3, burger = 6, roll = 4")
let boltorder = prompt("Sifarişi zəhmət olmasa restoran/yemək/pulunuz formasinda daxil edin!")

let arr= boltorder.toLowerCase().split('/')

let friprice = 3
let burgerprice = 6
let rollprice = 4

function order(){
    if(arr[0] === 'mcdonalds' || arr[0] === 'kfc' || arr[0] === 'burgerking'){
        mealorder()
        function mealorder(){
            if (arr[1] === 'fri'|| arr[1] === 'burger'|| arr[1] === 'roll'){
                moneyorder()
                function moneyorder (){
                    if (arr[2] >= friprice && arr[1] === 'fri' || arr[2] >= burgerprice && arr[1] === 'burger' || arr[2] >= rollprice && arr[1] === 'roll' ) {
                        let kuryer = confirm("Sifarişinizi təsdiq edirsiniz mi?")
                        if(kuryer===true){
                            alert("Sifarişiniz təsdiq olundu və çatdirilacaq!")
                        }
                        else{
                            alert("Kuryer sifarişinizi qəbul etmədi!")
                        }
                    }
                    else{
                        alert("Balansinizda kifayət qədər vəsait yoxdur!")
                    }
                }
            }
            else{
                alert("Zəhmət olmasa sifarişin düzgünlüyünü yoxlayin!")}
        }
    }
    else{
    alert("Zəhmət olmasa sifarişin düzgünlüyünü yoxlayin!")}
}

order()
