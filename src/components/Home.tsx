

const Home = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>This is the Home page.</p>
    </div>
  );
};

export default Home;

// import { connect, ConnectedProps } from 'react-redux';
// import { Product } from '../types/Product';

// interface State{
//   viewedItems:{
//     lastViewedItems: Product[];
//   };
// }


// const Home = ({ lastViewedItems }) => {
//   return (
//     <div>
//       <h1>Welcome to my website!</h1>
//       <p>This is the Home page.</p>
//       <h2>Last Viewed Items</h2>
//       <ul>
//         {lastViewedItems.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = (state: State) => {
//   return {
//     lastViewedItems: state.viewedItems.lastViewedItems,
//   };
// };

// export default connect(mapStateToProps)(Home);