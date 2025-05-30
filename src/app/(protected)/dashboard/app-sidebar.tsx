'use client'

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader } from "@/components/ui/sidebar"
 

 

export function AppSidebar() {

    return (
        <>
        <Sidebar collapsible="icon" variant='floating'>
            <SidebarHeader>
                Logo
            </SidebarHeader>
             <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                </SidebarGroup>
             </SidebarContent>
     </Sidebar>
     </>
    )
    
}