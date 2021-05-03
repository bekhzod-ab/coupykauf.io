import "./filter-style.css";
/*  Control buttons */

const Filter = ({vouchers, setVouchers}) => {
return(
<div id="myBtnContainer">
    <button class="btn /* active */"> Show all</button>
    <button class="btn" onclick="filterSelection('gastronomy')"> Gastronomy</button>
    <button class="btn" onclick="filterSelection('entertainment')"> Entertainment</button>
    <button class="btn" onclick="filterSelection('beauty')"> Beauty</button>
    <button class="btn" onclick="filterSelection('tourism')"> Tourism</button>
    <button class="btn" onclick="filterSelection('sport')"> Sport</button>
    <button class="btn" onclick="filterSelection('hobby')"> Hobby</button>
    <button class="btn" onclick="filterSelection('other')"> Other</button>

</div>
)
}
export default Filter

/* no functionality yet */