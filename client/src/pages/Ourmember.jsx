import Defaultlayout from '../components/Defaultlayout';
import './ourmember.scss';
export default function Ourmember({setselected}) {
  setselected("ourmember");
  return (
    <Defaultlayout>
    <h1>This is our members page</h1>
    </Defaultlayout>
  )
}
