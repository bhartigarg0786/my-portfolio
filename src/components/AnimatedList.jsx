import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

const AnimatedList = ({
  items = [
    {
      name: 'React',
      icon: <FaReact className="text-[#61DBFB]" />,
      description: 'Building interactive UIs and dynamic web apps.',
      progress: 90,
    },
    {
      name: 'Vite',
      icon: <SiVite className="text-[#646CFF]" />,
      description: 'A lightning-fast build tool for modern web development.',
      progress: 85,
    },
    {
      name: 'Redux',
      icon: <SiRedux className="text-[#764ABC]" />,
      description: 'State management for JavaScript applications.',
      progress: 80,
    },
    {
      name: 'JavaScript (ES6+)',
      icon: <FaJsSquare className="text-[#F7DF1E]" />,
      description: 'Modern JavaScript features for building dynamic applications.',
      progress: 95,
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 className="text-[#E34F26]" />,
      description: 'Markup language for creating structured web pages.',
      progress: 95,
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt className="text-[#2965f1]" />,
      description: 'Styling the web with custom layouts and beautiful designs.',
      progress: 85,
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="text-[#68A063]" />,
      description: 'JavaScript runtime for building scalable applications.',
      progress: 80,
    },
    {
      name: 'PHP',
      icon: <FaPhp className="text-[#8993be]" />,
      description: 'Server-side language for building dynamic web pages.',
      progress: 70,
    },
    {
      name: 'MySQL',
      icon: <SiMysql className="text-[#00618a]" />,
      description: 'Relational database management system.',
      progress: 75,
    },
    {
      name: 'WordPress',
      icon: <SiWordpress className="text-[#21759B]" />,
      description: 'Content management system for websites and blogs.',
      progress: 70,
    },
    {
      name: 'Axios',
      icon: <SiAxios className="text-[#5A29E6]" />,
      description: 'Promise-based HTTP client for making requests.',
      progress: 85,
    },
  ],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1,
}) => {
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  // Scroll event handler to manage gradient opacity
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;

      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth'
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative w-full max-w-[500px] ${className}`}>
      <div
        ref={listRef}
        className={`max-h-[400px] overflow-y-auto p-4 ${
          displayScrollbar
            ? '[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-[#060010] [&::-webkit-scrollbar-thumb]:bg-[#222] [&::-webkit-scrollbar-thumb]:rounded-[4px]'
            : 'scrollbar-hide'
        }`}
        onScroll={handleScroll}
        style={{
          scrollbarWidth: displayScrollbar ? 'thin' : 'none',
          scrollbarColor: '#222 #060010'
        }}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={0.1 * index} // Increase delay for each item based on its index
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              if (onItemSelect) {
                onItemSelect(item, index);
              }
            }}
          >
            <div
              className={`p-4 bg-[#111] rounded-lg ${selectedIndex === index ? 'bg-[#222]' : ''} ${itemClassName}`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-xl">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-white text-lg font-semibold m-0">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <div className="mt-2">
                    <div
                      className="h-1 bg-gray-600 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>

      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-[#060010] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#060010] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}
    </div>
  );
};

export default AnimatedList;
