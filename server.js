const  express   = require('express'),
    cors         = require('cors'),
    path         = require('path'),
    enforce      = require('express-sslify'),
    morgan       = require('morgan'),
    mongoose     = require('mongoose'),
    bodyParser   = require('body-parser'),
    app = express();
    
require('dotenv').config();

const ingredientsRoutes = require('./routes/ingredientsRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');

const ENVIRONMENT = process.env.NODE_ENV || 'dev';

const CONNECTION_URL = process.env.MONGO;

mongoose.connect(CONNECTION_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(console.log('connected to DB')) 
    .catch(err => console.error('There has been an error. DB probably not connected:', err));


app.use(morgan('combined'));
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/ingredient', ingredientRoutes);

app.use((err, req, res, next) => {
    console.log(err);
    next();
  });

  
if (ENVIRONMENT !== 'dev') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join("client", "build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(process.env.PORT, () => console.log('Backend listening on port', process.env.PORT));



