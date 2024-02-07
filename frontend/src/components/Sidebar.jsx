import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutBtn from './LogoutBtn';
const Sidebar = () => {
  return (
    <aside className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />

      <div className='divider px-3'></div>

      <Conversations />

      <LogoutBtn />
    </aside>
  );
};

export default Sidebar;
