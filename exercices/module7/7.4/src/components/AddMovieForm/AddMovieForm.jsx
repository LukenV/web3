import {Input, Button, Form} from "antd";
const {TextArea} = Input;
import "./AddMovieForm.css";

const AddMovieForm = ({ onMovieAdded }) => {

  const handleSubmit = (values) => {
    onMovieAdded(values);
  };
  return (
    <Form id="form" onFinish={handleSubmit}>
      <Form.Item
          label="Titre :"
          name="title"
          rules={[{ required: true }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
          label="Réalisateur :"
          name="director"
          rules={[{ required: true }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
          label="Durée :"
          name="duration"
          rules={[{ required: true }]}
      >
        <Input type="number"/>
      </Form.Item>

      <Form.Item
          label="URL de l'image :"
          name="imageUrl"
          rules={[
              {
                  required: true,
              }
          ]}
      >
          <Input/>
      </Form.Item>

      <Form.Item
          label="Description :"
          name="description"
          rules={[{ required: false }]}
      >
        <TextArea/>
      </Form.Item>

      <Form.Item
          label="Budget :"
          name="budget"
          rules={[{ required: false }]}
      >
        <Input/>
      </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">Ajouter</Button>
        </Form.Item>
    </Form>
  );
};

export default AddMovieForm;
