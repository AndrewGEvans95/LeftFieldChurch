'use client';

interface BaseballCardProps {
  name: string;
  position: string;
  details: string[];
  className?: string;
}

export default function BaseballCard({ name, position, details, className = '' }: BaseballCardProps) {
  const handlePrint = () => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print ${name}</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
              body {
                margin: 0;
                padding: 0;
                font-family: 'Playfair Display', serif;
                background: #f8f4e9;
              }
              .baseball-card {
                width: 350px;
                height: 500px;
                border: 2px solid #8b4513;
                border-radius: 8px;
                padding: 1rem;
                background: #fff;
                box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              }
              .card-header {
                text-align: center;
                border-bottom: 1px solid #8b4513;
                padding-bottom: 0.5rem;
                margin-bottom: 0.5rem;
              }
              .player-name {
                margin: 0;
                font-size: 1.8rem;
                color: #8b4513;
              }
              .player-position {
                font-size: 1rem;
                color: #666;
              }
              .card-image {
                text-align: center;
                font-size: 3rem;
                margin: 1rem 0;
              }
              .card-details {
                font-size: 0.9rem;
                color: #333;
                flex-grow: 1;
              }
              .card-details p {
                margin: 0.3rem 0;
              }
              .card-footer {
                text-align: right;
                font-size: 0.8rem;
                color: #666;
                border-top: 1px solid #8b4513;
                padding-top: 0.5rem;
                margin-top: 0.5rem;
              }
            </style>
          </head>
          <body>
            <div class="baseball-card">
              <div class="card-header">
                <h2 class="player-name">${name}</h2>
                <div class="player-position">${position}</div>
              </div>
              <div class="card-image">⚾</div>
              <div class="card-details">
                ${details.map(detail => `<p>${detail}</p>`).join('')}
              </div>
              <div class="card-footer">
                Durham Bulls • 2025
              </div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.print();
        printWindow.close();
      };
    }
  };

  return (
    <div className={`baseball-card-container ${className} group relative overflow-hidden`}>
      {/* Card Content */}
      <div className="relative z-10 p-4 bg-white border-2 border-[#8b4513] rounded-lg shadow-lg">
        <div className="text-center border-b-2 border-[#8b4513] pb-2 mb-2">
          <h4 className="text-2xl font-playfair font-bold text-[#8b4513]">{name}</h4>
          <span className="text-sm text-gray-600">{position}</span>
        </div>
        
        <div className="flex justify-center my-4">
          <div className="text-5xl">⚾</div>
        </div>
        
        <div className="card-details text-sm text-gray-700 space-y-2">
          {details.map((detail, index) => (
            <p key={index} className="group-hover:text-gray-900 transition-colors duration-200">
              {detail}
            </p>
          ))}
        </div>
        <button 
          onClick={handlePrint}
          className="mt-4 px-3 py-1 border border-[#8b4513] text-sm text-[#8b4513] hover:bg-[#8b4513] hover:text-white transition-colors duration-200"
        >
          Print Card
        </button>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-200"></div>
    </div>
  );
}
