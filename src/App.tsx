import { useState } from 'react';

import StyledButton from './components/StyledButton';
import StyledList from './components/StyledList';

function App() {
  const [count, setCount] = useState(0);
  const [records, setRecords] = useState<number[]>([]);

  return (
    <main className="flex flex-col items-center py-4">
      <StyledButton id="increment" onClick={() => setCount(count + 1)}>+1</StyledButton>
      <div className="flex h-20 w-48 items-center justify-center text-2xl">
        Count:
        <div id="count-display" className="ml-4 flex size-10 items-center justify-center rounded-full bg-yellow-400 text-white">
          {count}
        </div>
      </div>
      <StyledButton id="decrement" onClick={() => setCount(count - 1)}>-1</StyledButton>

      <br />
      <StyledButton id="add-record" onClick={() => setRecords([...records, count])}>기록 추가</StyledButton>
      <StyledList id="record-list" records={records} />
    </main>
  );
}

export default App;
