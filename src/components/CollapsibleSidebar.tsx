import { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Globe, 
  Lock, 
  Database, 
  Activity,
  Menu,
  X,
  Settings,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AssetOnboarding from './AssetOnboarding';

interface CollapsibleSidebarProps {
  currentPath?: string;
}

export default function CollapsibleSidebar({ currentPath = '/dashboard' }: CollapsibleSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAssetModalOpen, setIsAssetModalOpen] = useState(false);

  const navigationItems = [
    { icon: Activity, label: 'Overview', path: '/dashboard' },
    { icon: AlertTriangle, label: 'Threat Intelligence', path: '/threat-intelligence' },
    { icon: Eye, label: 'Alerts', path: '/alerts' },
    { icon: Globe, label: 'Data Leak Detection', path: '/data-leak-detection' },
    { icon: FileText, label: 'Reports', path: '/reports' },
    { icon: Lock, label: 'Credential Monitoring', path: '#' },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} bg-card border-r border-border transition-all duration-300`}>
      <div className="p-6">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} mb-8`}>
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-xl font-montserrat font-bold text-foreground">DarkThreat</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-muted-foreground hover:text-foreground"
          >
            {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
          </Button>
        </div>
        
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant="ghost" 
                  className={`w-full ${isCollapsed ? 'justify-center px-0' : 'justify-start'} ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {!isCollapsed && <span className="ml-2">{item.label}</span>}
                </Button>
              </Link>
            );
          })}
          
          {/* Asset Management */}
          <Button 
            variant="ghost" 
            onClick={() => setIsAssetModalOpen(true)}
            className={`w-full ${isCollapsed ? 'justify-center px-0' : 'justify-start'} text-muted-foreground hover:text-foreground`}
          >
            <Settings className="w-4 h-4" />
            {!isCollapsed && <span className="ml-2">Asset Management</span>}
          </Button>
        </nav>
        
        {/* Asset Onboarding Modal */}
        <AssetOnboarding 
          isOpen={isAssetModalOpen} 
          onClose={() => setIsAssetModalOpen(false)} 
        />
      </div>
    </aside>
  );
}