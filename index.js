let number =1;
{
    let number=2;
    console.log('log lần 1 ',number);
}
console.log('log lần 2',number);
const PI =3.141592654;
// PI=5;
const sinhVien ={ma:1,ten:'nguyen tiend dat'};
sinhVien.ma=2;
sinhVien.ten='nguyen tien b';



// -------------arrow funtion--------
// ======= khai báo function theo es5
let showMessage=function(mess){
    console.log(mess);
}

// khai báo function es6
let showMessageES6=(mess)=>{
    console.log(mess);
}

// đối vs câu lệnh return(es5)
let tinhDiemTrungBinh=function(dToan,dLy,dHoa){
    return (dHoa+dLy+dToan)/3;
}

// es6
let tinhDiemTrungBinhES6 = (dToan,dLy,dHoa)=>(dToan+dLy+dHoa)/3;
// khác biệt về ngũ cảnh con trỏ this

let hocVien={
    hoTen:'Nguyen tien dat',
    lop:'Front End 41',
    layThongTinSinhVien: function(){
        let hienThiThongTin =()=> {
            console.log("Họ Tên",this.hoTen,"Lớp",this.lop);
        }
        hienThiThongTin();
    }
}
hocVien.layThongTinSinhVien();

// rest pẩm(toán tử...)
// let hienThiThongTin= function(hoTen,lop){
//     console.log('họ tên:'+hoTen);
//     console.log('lớp:'+lop);
// }
let hienThiThongTin=function(...rest){
    switch(rest.length){
        case 2:{
            console.log('họ tên:'+rest[0]);
            console.log('lớp:'+rest[1]);
        };break;
        case 3:{
            console.log('mã:'+rest[0]);
            console.log('họ tên:'+rest[1]);
            console.log('lớp:'+rest[2]);
        };break;
        default:console.log('không hợp lệ!')
    }
}
hienThiThongTin(1,'nguyễn tiến đạt','fe 41',4);