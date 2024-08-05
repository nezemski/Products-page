import { useContext } from "react";
import { CreateProduct } from "../../components/CteateProduct";
import { ErrorMessage } from "../../components/error";
import { Loader } from "../../components/Loader";
import { Modal } from "../../components/Modal";
import { Product } from "../../components/Product";
import { useHook } from "../hook";
import { IProduct } from "../../models";
import { ModalContext } from "../../context/ModalContext";

export function ProductsPage() {
  const { loading, error, products, addProducts } = useHook();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProducts(product);
  };
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text 2xl px-4"
        onClick={open}
      >
        Add product
      </button>
    </div>
  );
}
