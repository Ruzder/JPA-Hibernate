package cl.awakelab.controller;

import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import cl.awakelab.modelo.Capacitacion;
import cl.awakelab.service.CapacitacionServiceIMPL;

@Controller
public class CapacitacionController {
			
	
	@Autowired
	private CapacitacionServiceIMPL cs;
	
	@RequestMapping(value="/listarcapacitacion", method=RequestMethod.GET )
	public ModelAndView listar() {
		List<Capacitacion> lista = cs.readAll();
		ModelAndView mv = new ModelAndView("listarcapacitacion");
		mv.addObject("lista", lista);
		return mv;
	}
	
	@RequestMapping(value="/verCap/{idEntity}", method=RequestMethod.GET )
	public ModelAndView ver(@PathVariable("idEntity") int idEntity) {
		ModelAndView mv = new ModelAndView("verCap");
		
		Capacitacion c = cs.readOne(idEntity);
		
		mv.addObject("c", c);
		return mv;
	}
	
	@RequestMapping(value="/editarCapacitacion/{idEntity}", method=RequestMethod.GET )
	public ModelAndView verEditar(@PathVariable("idEntity") int idEntity) {
		ModelAndView mv = new ModelAndView("editarCapacitacion");
		
		Capacitacion c = cs.readOne(idEntity);
		
		mv.addObject("c", c);
		return mv;
		
	}
	
	
	
//	@RequestMapping(value="/editarCapacitacion/{idEntity}", method=RequestMethod.POST)
//	public ModelAndView GuardarEditar(@PathVariable("idEntity") int idEntity) {
//		ModelAndView mv = new ModelAndView("listarcapacitacion");
//		
//		Capacitacion c = cs.readOne(idEntity);
//		
//		c.setIdEntity(c.getIdEntity());
//		c.setDiaEntity(c.getDiaEntity());
//		c.setHoraEntity(c.getHoraEntity());
//		c.setLugarEntity(c.getLugarEntity());
//		c.setDurEntity(c.getDurEntity());
//		c.setRutCliEntity(c.getRutCliEntity());
//		
//		mv.addObject("c", c);
//		
//		
//		
//		return mv;
//		
//	}
//	
	@RequestMapping(value="/editarCapacitacion/{idEntity}", method=RequestMethod.POST)
	public ModelAndView GuardarEditar(@PathVariable("idEntity") int idEntity, @RequestParam("diaTxt") String diaTxt,  @RequestParam("horaTxt") String horaTxt,
			@RequestParam("lugarTxt") String lugarTxt, @RequestParam("duracionTxt") String duracionTxt, @RequestParam("rutTxt") String rutTxt) {
		ModelAndView mv = new ModelAndView("listarcapacitacion");
		
		Capacitacion c = cs.readOne(idEntity);
		
		c.setIdEntity(c.getIdEntity());
		c.setDiaEntity(diaTxt);
		c.setHoraEntity(horaTxt);
		c.setLugarEntity(lugarTxt);
		c.setDurEntity(duracionTxt);
		c.setRutCliEntity(rutTxt);
		cs.update(c);
		
		List<Capacitacion> lista = cs.readAll();
	
		mv.addObject("lista", lista);
		return mv;
	
	}
	@RequestMapping(value = "/crearcapacitacion", method = RequestMethod.GET)
	public String crearCapVer(Model model) {
		
		Capacitacion c = cs.readOne(1); // llama al rut cliente para hacer un comparacion tiene que ser igual
		model.addAttribute("c", c);
		return "crearcapacitacion";
	}
	
	@RequestMapping(value="/crearcapacitacion", method=RequestMethod.POST)
	public String crearCapGuardar(Model model,@RequestParam ("idTxt") int idTxt, @RequestParam ("diaTxt") String diaTxt,
			@RequestParam("horaTxt") String horaTxt, @RequestParam ("lugarTxt") String lugarTxt,
			@RequestParam("duracionTxt") String duracionTxt, @RequestParam("rutTxt") String rutTxt) {
			
		Capacitacion c = new Capacitacion();   // lee los parametros para luego editar
		c.setIdEntity(idTxt);
		c.setDiaEntity(diaTxt);
		c.setHoraEntity(horaTxt);
		c.setLugarEntity(lugarTxt);
		c.setDurEntity(duracionTxt);
		c.setRutCliEntity(rutTxt);
		cs.create(c);;
				

		return "redirect:/listarcapacitacion";
	}
	
	@RequestMapping(value="/borrar/{idEntity}", method = RequestMethod.GET)
	public ModelAndView borrar(@PathVariable("idEntity") int idEntity) {
		
		cs.delete(idEntity);
		return new ModelAndView("redirect:/listarcapacitacion");
	}
	
	
	
	
	
	
	
	
}
