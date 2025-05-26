import React from 'react';
import { 
  LayoutDashboard, 
  Clock, 
  Calendar, 
  FileText, 
  BarChart2, 
  TestTube, 
  MessageSquare, 
  HelpCircle,
  Settings
} from 'lucide-react';
import { navigationLinks } from '../../data/navigationData';

const Sidebar: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconProps = { 
      size: 20, 
      className: "text-accent-400 transition-colors duration-200 group-hover:text-primary-500" 
    };
    
    switch (iconName) {
      case 'LayoutDashboard': return <LayoutDashboard {...iconProps} />;
      case 'Clock': return <Clock {...iconProps} />;
      case 'Calendar': return <Calendar {...iconProps} />;
      case 'FileText': return <FileText {...iconProps} />;
      case 'BarChart2': return <BarChart2 {...iconProps} />;
      case 'TestTube': return <TestTube {...iconProps} />;
      case 'MessageSquare': return <MessageSquare {...iconProps} />;
      case 'HelpCircle': return <HelpCircle {...iconProps} />;
      case 'Settings': return <Settings {...iconProps} />;
      default: return <LayoutDashboard {...iconProps} />;
    }
  };

  return (
    <aside className="hidden md:flex flex-col w-20 xl:w-64 bg-white border-r border-accent-100">
      <div className="flex flex-col h-full py-6">
        <div className="px-6 mb-6">
          <h2 className="text-xs uppercase tracking-wider text-accent-400 font-medium">General</h2>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-1 px-2">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className={`group flex items-center px-4 py-3 text-sm rounded-lg
                           transition-colors duration-200 ${
                    link.active 
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-accent-600 hover:bg-accent-50'
                  }`}
                >
                  <span className="flex-shrink-0">{getIcon(link.icon)}</span>
                  <span className="hidden xl:block ml-3">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;