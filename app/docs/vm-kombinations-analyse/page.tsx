import fs from 'fs'
import path from 'path'

export default function VmKombinationsAnalysePage() {
  const filePath = path.join(process.cwd(), 'public', 'docs', 'vm-kombinations-analyse.html')
  const htmlContent = fs.readFileSync(filePath, 'utf8')
  
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
      style={{ 
        width: '100%', 
        minHeight: '100vh',
        margin: 0,
        padding: 0
      }}
    />
  )
}

export const dynamic = 'force-static'
