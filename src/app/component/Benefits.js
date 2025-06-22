import { ChevronRight, Gift } from "lucide-react";


const Benefits = ({ cardStyle, benefits, isDarkMode }) => {
    return (
         <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Gift size={24} color="#8B5CF6" style={{ marginRight: '12px' }} />
                Your Benefits
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px'
              }}>
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.id}
                    className="benefit-card"
                    style={{
                      ...cardStyle,
                      padding: '24px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: '16px'
                    }}>
                      <div style={{
                        padding: '12px',
                        borderRadius: '12px',
                        backgroundColor: benefit.color,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {benefit.icon}
                      </div>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        backgroundColor: benefit.color,
                        color: 'white'
                      }}>
                        {benefit.value}
                      </span>
                    </div>
                    
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      margin: '0 0 8px 0'
                    }}>
                      {benefit.title}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: isDarkMode ? '#999' : '#666',
                      margin: '0 0 16px 0'
                    }}>
                      {benefit.description}
                    </p>
                    
                    <button
                      className="cta-button"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontWeight: '600',
                        border: 'none',
                        backgroundColor: isDarkMode ? '#404040' : '#f3f4f6',
                        color: isDarkMode ? '#fff' : '#000',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {benefit.ctaText}
                      <ChevronRight size={16} style={{ marginLeft: '8px' }} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
    )
};

export default Benefits;