import { usePDF } from 'react-to-pdf';
import {BiSolidDownload} from 'react-icons/bi';
 
const Pdf = ({ content }) => {
   const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
   return (
      <div>
         <button onClick={() => toPDF()}>Download PDF<BiSolidDownload></BiSolidDownload></button>
         <div ref={targetRef} className=' hidden text-black'>
           {content}
         </div>
      </div>
   )
}

export default Pdf;