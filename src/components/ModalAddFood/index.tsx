import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface ModalAddFoodProps{
  setIsOpen: () => void;
  handleAddFood: (data: IFood) => void;
  isOpen: boolean;
}
interface IFood{
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export default function ModalAddFood({setIsOpen, handleAddFood, isOpen }: ModalAddFoodProps){


  const handleSubmit = async (data: IFood) => {
    handleAddFood(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );

}


// class ModalAddFood extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.formRef = createRef();
//   //   this.;
//   // }

//   handleSubmit = async data => {
//     const { setIsOpen, handleAddFood } = this.props;

//     handleAddFood(data);
//     setIsOpen();
//   };

  // render() {
  //   const { isOpen, setIsOpen } = this.props;

//     return (
//       <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
//         <Form ref={this.formRef} onSubmit={this.handleSubmit}>
//           <h1>Novo Prato</h1>
//           <Input name="image" placeholder="Cole o link aqui" />

//           <Input name="name" placeholder="Ex: Moda Italiana" />
//           <Input name="price" placeholder="Ex: 19.90" />

//           <Input name="description" placeholder="Descrição" />
//           <button type="submit" data-testid="add-food-button">
//             <p className="text">Adicionar Prato</p>
//             <div className="icon">
//               <FiCheckSquare size={24} />
//             </div>
//           </button>
//         </Form>
//       </Modal>
//     );
//   }
// };

// export default ModalAddFood;
