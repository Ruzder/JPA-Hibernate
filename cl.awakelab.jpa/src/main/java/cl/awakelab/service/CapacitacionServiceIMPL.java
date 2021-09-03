package cl.awakelab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.awakelab.modelo.Capacitacion;
import cl.awakelab.repository.ICapacitacionRepository;

@Service
public class CapacitacionServiceIMPL  implements  ICapacitacionService{
	
	
	@Autowired
	ICapacitacionRepository er;
	
	@Override
	public List<Capacitacion> readAll() {
		// TODO Auto-generated method stub
		return er.findAll();
	}

	@Override
	public Capacitacion readOne(int idEntity) {
		// TODO Auto-generated method stub
		return er.findById(idEntity).get();
	}

	@Override
	public void update(Capacitacion c) {
		er.save(c);
		
	}

	@Override
	public void create(Capacitacion c) {
		er.save(c);
		
	}

	@Override
	public void delete(int idEntity) {
		er.deleteById(idEntity);
		
	}

}
