import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Check, Trash2, Search, Play, Star, ShoppingCart } from 'lucide-react';

// Todo App Demo
export const TodoDemo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Build portfolio website', completed: true },
    { id: 2, text: 'Deploy to production', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="space-y-4 p-4 bg-background rounded-lg border">
      <div className="flex gap-2">
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1"
        />
        <Button onClick={addTodo} size="sm">
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleTodo(todo.id)}
              className={todo.completed ? 'text-green-500' : ''}
            >
              <Check className="w-4 h-4" />
            </Button>
            <span className={`flex-1 ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
              {todo.text}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteTodo(todo.id)}
              className="text-destructive"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Weather Demo
export const WeatherDemo = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({
    city: 'New York',
    temp: '22°C',
    condition: 'Sunny',
    humidity: '65%',
    wind: '15 km/h'
  });

  const searchWeather = () => {
    if (city.trim()) {
      // Simulate API call with mock data
      const mockWeather = {
        city: city,
        temp: Math.floor(Math.random() * 30 + 5) + '°C',
        condition: ['Sunny', 'Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 40 + 40) + '%',
        wind: Math.floor(Math.random() * 20 + 5) + ' km/h'
      };
      setWeather(mockWeather);
      setCity('');
    }
  };

  return (
    <div className="space-y-4 p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border">
      <div className="flex gap-2">
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          onKeyPress={(e) => e.key === 'Enter' && searchWeather()}
          className="flex-1"
        />
        <Button onClick={searchWeather} size="sm">
          <Search className="w-4 h-4" />
        </Button>
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold">{weather.city}</h3>
        <div className="text-3xl font-bold text-primary">{weather.temp}</div>
        <div className="text-lg text-muted-foreground">{weather.condition}</div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Humidity</div>
            <div className="font-semibold">{weather.humidity}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Wind</div>
            <div className="font-semibold">{weather.wind}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// E-commerce Demo
export const EcommerceDemo = () => {
  const [cart, setCart] = useState<number[]>([]);
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99, rating: 4.5 },
    { id: 2, name: 'Smart Watch', price: 199, rating: 4.8 },
    { id: 3, name: 'Laptop Stand', price: 49, rating: 4.2 }
  ];

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const getCartCount = (productId: number) => {
    return cart.filter(id => id === productId).length;
  };

  return (
    <div className="space-y-4 p-4 bg-background rounded-lg border">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Featured Products</h3>
        <Badge variant="secondary">Cart: {cart.length}</Badge>
      </div>
      <div className="space-y-3">
        {products.map(product => (
          <div key={product.id} className="flex items-center justify-between p-3 bg-muted/50 rounded">
            <div>
              <div className="font-medium">{product.name}</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Star className="w-3 h-3 fill-current text-yellow-500" />
                {product.rating} • ${product.price}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {getCartCount(product.id) > 0 && (
                <Badge variant="outline">{getCartCount(product.id)}</Badge>
              )}
              <Button size="sm" onClick={() => addToCart(product.id)}>
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Netflix Demo
export const NetflixDemo = () => {
  const [playing, setPlaying] = useState<number | null>(null);
  const movies = [
    { id: 1, title: 'The Matrix', genre: 'Sci-Fi', year: 1999 },
    { id: 2, title: 'Inception', genre: 'Thriller', year: 2010 },
    { id: 3, title: 'Interstellar', genre: 'Sci-Fi', year: 2014 }
  ];

  return (
    <div className="space-y-4 p-4 bg-black/90 text-white rounded-lg border">
      <h3 className="text-xl font-bold text-red-500">StreamFlix</h3>
      <div className="space-y-3">
        {movies.map(movie => (
          <div key={movie.id} className="flex items-center justify-between p-3 bg-gray-800 rounded">
            <div>
              <div className="font-medium">{movie.title}</div>
              <div className="text-sm text-gray-400">{movie.genre} • {movie.year}</div>
            </div>
            <Button
              size="sm"
              variant={playing === movie.id ? "secondary" : "outline"}
              onClick={() => setPlaying(playing === movie.id ? null : movie.id)}
              className="bg-red-600 hover:bg-red-700 border-red-600"
            >
              <Play className="w-4 h-4" />
              {playing === movie.id ? 'Stop' : 'Play'}
            </Button>
          </div>
        ))}
      </div>
      {playing && (
        <div className="bg-gray-800 p-4 rounded text-center">
          <div className="text-sm text-gray-400 mb-2">Now Playing</div>
          <div className="font-bold">{movies.find(m => m.id === playing)?.title}</div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div className="bg-red-600 h-2 rounded-full w-1/3"></div>
          </div>
        </div>
      )}
    </div>
  );
};