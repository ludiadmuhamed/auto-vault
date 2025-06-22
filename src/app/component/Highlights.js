import { CreditCard, Trophy, Zap } from "lucide-react";


const Highlights = ({ cardStyle, isDarkMode }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
        }}>
            <div style={cardStyle}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <p style={{
                            fontSize: '14px',
                            color: isDarkMode ? '#999' : '#666',
                            margin: '0 0 4px 0'
                        }}>
                            This Month
                        </p>
                        <p style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#10B981',
                            margin: '0 0 4px 0'
                        }}>
                            ₹2,340
                        </p>
                        <p style={{
                            fontSize: '12px',
                            color: '#10B981',
                            margin: 0
                        }}>
                            +12% from last month
                        </p>
                    </div>
                    <div style={{
                        padding: '12px',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderRadius: '12px'
                    }}>
                        <Zap size={24} color="#10B981" />
                    </div>
                </div>
            </div>

            <div style={cardStyle}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <p style={{
                            fontSize: '14px',
                            color: isDarkMode ? '#999' : '#666',
                            margin: '0 0 4px 0'
                        }}>
                            Total Savings
                        </p>
                        <p style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#3B82F6',
                            margin: '0 0 4px 0'
                        }}>
                            ₹18,750
                        </p>
                        <p style={{
                            fontSize: '12px',
                            color: '#3B82F6',
                            margin: 0
                        }}>
                            Lifetime savings
                        </p>
                    </div>
                    <div style={{
                        padding: '12px',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '12px'
                    }}>
                        <CreditCard size={24} color="#3B82F6" />
                    </div>
                </div>
            </div>

            <div style={cardStyle}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <p style={{
                            fontSize: '14px',
                            color: isDarkMode ? '#999' : '#666',
                            margin: '0 0 4px 0'
                        }}>
                            Rank
                        </p>
                        <p style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#8B5CF6',
                            margin: '0 0 4px 0'
                        }}>
                            #247
                        </p>
                        <p style={{
                            fontSize: '12px',
                            color: '#8B5CF6',
                            margin: 0
                        }}>
                            Top 5% users
                        </p>
                    </div>
                    <div style={{
                        padding: '12px',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderRadius: '12px'
                    }}>
                        <Trophy size={24} color="#8B5CF6" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Highlights;