import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../../assets/styles/components/deropdown.component.module.scss'

const DropDownList = () => {
   return (
      <DropdownButton id="dropdown-item-button" title="list" className='qwq'>
         <Dropdown.ItemText >Dropdown item text</Dropdown.ItemText>
         <Dropdown.Item as="button">Action</Dropdown.Item>
         <Dropdown.Item as="button">Another action</Dropdown.Item>
         <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>
   )
}

export default DropDownList