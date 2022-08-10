import ReactDOMServer, { renderToString } from 'react-dom/server'
//@ts-ignore
import jsPDF from 'jspdf'

const summaryPdf = new jsPDF()
export const PdfExporter: React.FC<{ component: any }> = (props) => {
  const save = () => {
    summaryPdf.html(ReactDOMServer.renderToStaticMarkup(props.component), {
      callback: () => {
        summaryPdf.save('myDocument.pdf')
      },
    })
  }

  return (
    <div>
      <button onClick={save}>save</button>
    </div>
  )
}
