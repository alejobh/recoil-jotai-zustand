import { jokesMock } from '@/app/_data/jokes';
import { Toast } from '@/app/_types/toast';

interface AddToastProps {
  addToast: (toast: Toast) => void;
  toasts: Toast[];
}

const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokesMock.length);
  return jokesMock[randomIndex];
};

export const AddToast = ({ addToast, toasts }: AddToastProps) => {
  const onAdd = () => {
    let added = false;
    while (!added) {
      const currentJk = getRandomJoke();
      const find = toasts.some((jk) => jk.id === currentJk.id);
      if (!find) {
        added = true;
        addToast(currentJk);
      }
    }
  };

  return (
    <button
      className="mb-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-64"
      type="button"
      onClick={onAdd}
    >
      Show Joke
    </button>
  );
};
