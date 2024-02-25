const CreateOrder = () => {
  return (
    <form>
      <h2>Ready to order? Lets go</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" type="text" />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone number</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" />
      </div>
      <div>
        <input id="priority" type="checkbox" />
        <label htmlFor="priority">Want to give your order a priority?</label>
      </div>
      <button>Order now</button>
    </form>
  );
};

export default CreateOrder;
