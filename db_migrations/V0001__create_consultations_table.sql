CREATE TABLE IF NOT EXISTS t_p95053796_project_infinity_bri.consultations (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);