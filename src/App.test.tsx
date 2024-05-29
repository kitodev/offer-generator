import App from './App';
import ReactDOM from 'react-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("[UNIT] Testing the App component", () => {

  describe("Component render", () => {
      it("renders without crashing", () => {
          const div = document.createElement("div");
          ReactDOM.render(<App />, div);
          ReactDOM.unmountComponentAtNode(div);
      });
  });
});