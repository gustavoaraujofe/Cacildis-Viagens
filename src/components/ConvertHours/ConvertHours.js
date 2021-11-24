function ConvertHours(props) {
  let hourConvert;
  let hour = props.value.split(":");
  let min = hour.splice(1, 1)[0].split(" ")[0];
  let decrement = props.decrement ? 1 : 0;
  if (props.value.includes("PM")) {
    hour = Number(hour) + 12;
    console.log(hour - 1);
    hourConvert = `${hour - decrement}:${min}`;
  } else {
    hourConvert = `${hour - decrement}:${min}`;
  }
  return hourConvert;
}
export default ConvertHours;
